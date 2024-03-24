import { SkillsGrid } from "../_components/skills-grid";
import PageTitle from "../_components/page-titile";

export default function Page() {
  return (
    <>
      <PageTitle title="Skills">
        <SkillsGrid />
      </PageTitle>
    </>
  );
}