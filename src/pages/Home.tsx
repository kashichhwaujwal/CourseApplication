import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import PageTitle from "component/PageTitle";
import { RootState } from "store/store";

const Home = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const { t } = useTranslation();

  return (
    <header style={{ flexDirection: "column" }}>
      <PageTitle title={t("home.title")} />
      <p style={{ marginLeft: "2rem", marginTop: "0.9rem" }}>
        {user.profile.full_name}
      </p>
    </header>
  );
};

export default Home;
