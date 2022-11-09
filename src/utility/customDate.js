import moment from "moment/moment";

const customDate = (date) => {
    // const formatedDate = date.split("T")[0];
    const formatedDate = moment(date).calendar();
    return formatedDate;
}

export default customDate;