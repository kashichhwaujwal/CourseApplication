import { useTranslation } from "react-i18next";

import PageTitle from "component/PageTitle";

const Methodology = () => {
  const { t } = useTranslation();

  return <PageTitle title={t("methodology.title")} />;
};

export default Methodology;
