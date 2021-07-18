import {
  useState,
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useEffect,
} from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import OutputPanel from "../components/OutputPanel";
import { query } from "../utils";
import { APIResponse, UserType } from "../interfaces";
import { GetStaticProps } from "next";
import { constantVariable } from "../config";

type HomeProps = { data: APIResponse };

export const getStaticProps: GetStaticProps = async () => {
  const data = await query();
  return data
    ? { props: { data } }
    : { notFound: true, redirect: "/", revalidate: "5s" };
};

const Home = ({ data: { results = [] } }: HomeProps) => {
  const { ALL_USERS, FEMALE_USERS, MALE_USERS, MAX_RESULTS, DEFAULT_QUERY } =
    constantVariable;
  const [searchTerm, setSearchTerm] = useState("");
  const [usersData, setUsersData] = useState<UserType[]>([]);
  const [showProfile, setShowProfile] = useState(false);
  const [profile, setProfile] = useState<UserType>();
  const [selection, setSelection] = useState(ALL_USERS);
  const [page, setPage] = useState(1);

  const paginate: MouseEventHandler<HTMLButtonElement> = async ({
    currentTarget: { textContent },
  }) => {
    if (
      textContent?.toLocaleLowerCase() === " next" &&
      page > 0 &&
      page < MAX_RESULTS
    ) {
      try {
        const next = page + 1;
        const { results: nextPageData } = await query(
          `${DEFAULT_QUERY}&page=${next}`
        );
        setPage(next);
        setUsersData(() => nextPageData);
      } catch (e) {
        console.error(e);
      }
    }
    if (textContent?.toLocaleLowerCase() === " prev" && page > 1) {
      try {
        const prev = page - 1;
        const { results: prevPageData } = await query(
          `${DEFAULT_QUERY}&page=${prev}`
        );
        setPage(prev);
        setUsersData(prevPageData);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const sortUsers: MouseEventHandler<HTMLDivElement> = ({
    currentTarget: { lastChild },
  }) => {
    const selected = lastChild?.textContent!;
    const maleUsers = results.filter(({ gender }) => gender === "male");
    const femaleUsers = results.filter(({ gender }) => gender === "female");
    switch (selected) {
      case FEMALE_USERS:
        setSelection(selected);
        setUsersData(femaleUsers);
        break;
      case MALE_USERS:
        setSelection(selected);
        setUsersData(maleUsers);
        break;
      // ALL_USERS
      default:
        setSelection(selected);
        setUsersData(results);
        break;
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) =>
    e.preventDefault();

  const handleSearchInputChange: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget: { value },
  }) => {
    setSearchTerm(value);
    const filter = usersData.filter(
      ({ name: { first, last } }) =>
        first.toLowerCase() == value.toLowerCase() ||
        last.toLowerCase() == value.toLowerCase()
    );
    filter.length && setUsersData(filter);
    !value && setUsersData(results);
  };

  const renderProfile = (id: string) => {
    const user = usersData.find(({ login: { uuid } }) => uuid === id);
    setShowProfile(true);
    setProfile(user);
  };

  const backToList = () => setShowProfile(false);

  useEffect(() => {
    results && setUsersData(results);
  }, [results]);

  return (
    <>
      <Head>
        <title>Home Panel</title>
      </Head>
      <Layout>
        <Menu
          showProfile={showProfile}
          searchTerm={searchTerm}
          handleSubmit={handleSubmit}
          sortUsers={sortUsers}
          handleSearchInputChange={handleSearchInputChange}
        />
        <OutputPanel
          selection={selection}
          users={usersData}
          showProfile={showProfile}
          profile={profile}
          paginate={paginate}
          renderProfile={renderProfile}
          backToList={backToList}
        />
      </Layout>
    </>
  );
};

export default Home;
