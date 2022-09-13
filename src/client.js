import client from "@sanity/client";

export default client({
    projectId: "7ab2b2wj",
    dataset: "production",
    useCdn: true
});