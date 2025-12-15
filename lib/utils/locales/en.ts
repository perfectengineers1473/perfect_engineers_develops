const en_locales = {
  PREVIEWING_DRAFTS: "Previewing drafts.",
  BACKTOPUBLISHED: "Back to published",
  LETS_CONNECT: "Lets Connect",
  FIND_OUT_MORE: "Find Out More",
  DATA_NOT_FOUND: "DATA NOT FOUND",
  ALL: "All",
  NAME: "Name",
  LAST_NAME: "Last Name",
  FIRST_NAME: "First Name",
  JOB_TITLE: "Job Title",
  EMAIL: "Email",
  PHONE_NUMBER: "Phone Number",
  COMPANY_NAME: "Company Name",
  WEBSITE: "Website",
  COMPANY_REVENUE: "Company Revenue",
  HOW_CAN_WE_HELP: "How Can We Help?",
  RESUME_PORTFOLIO: "Resume/Portfolio",
  UPLOADED_FILES: "Uploaded Files",
};
export default en_locales as
  | Record<keyof typeof en_locales, string>
  | Record<string, string>;
