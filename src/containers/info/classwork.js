// @flow

export function chooseClasswork(company: string) {
  switch (company) {
    case "facebook":
      return "Data Structures, Networks, Languages, Engineering Communication";
    case "microsoft":
      return "Data Structures, Networks, Operating Systems, Languages, Architecture, Engineering Communication";
    case "sendgrid":
      return "Data Structures, Software Design, Architecture, Languages, Networks, Operating Systems, Engineering Communication";
    default:
      return "Data Structures, Networks, Operating Systems, Languages, Architecture, Organization, Digital Logic, Engineering Communication";
  }
}
