var stream = require("getstream");
// Instantiate a new client (server side)
client = stream.connect(
    "7t9tn3ub7fjt",
    "nx769zry6heu7uxdhr5wbjwnsa8sxa8vdh27m8tpc2ms3pubuyvutfsgd6t24d2n",
    "51953"
);
// Instantiate a new client (client side)
// client = stream.connect("7t9tn3ub7fjt", null, "51953");
// Find your API keys here https://getstream.io/dashboard/
// const serverSideClient = new StreamChat(
//     "7t9tn3ub7fjt",
//     "nx769zry6heu7uxdhr5wbjwnsa8sxa8vdh27m8tpc2ms3pubuyvutfsgd6t24d2n"
// );

(async () => {
    try {
        // const token = await serverSideClient.createToken("blurr");
        const userToken = client.createUserToken("sexy");
        console.warn("-- Console t", userToken);
        // const token = await serverSideClient.updateUser({ id: "52", name: "SEX" }, "Angel");
        // serverSideClient.user("john-doe").create({
        //     name: "John Doe",
        //     occupation: "Software Engineer",
        //     gender: 'male'
        // });
    } catch (e) {
        console.warn("-- Console e", e);
    }
    // // console.warn("-- Console TOKE", token);
    // // const response = await serverSideClient.queryUsers();
    // // console.warn("-- Console r", response);
    // // } catch (e) {
    // //     console.warn("-- Console e", e);
    //
    // //     await serverSideClient.updateUser(
    // //         { id: "52", name: "Angel", role: "admin", favorite_color: "green" },
    // //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQW5nZWwifQ.sZkKDM-0RbcLhMSX2qCmN3gsv55SXmsGHgPDU_IW0e8");
    // //     // user object is now {id: userID, role: 'user', favorite_color: 'green'}
    // //     // note how you are not allowed to make the user admin via this endpoint
    // //     // const updateResponse = await serverClient.updateUsers([
    // //     //     { id: userID, role: "admin", book: "dune" }
    // //     // ]);
    // //     // user object is now {id: userID, role: 'admin', book: 'dune'}
    // // // }
    // // disable auth checks, allows dev token usage
    // await serverSideClient.updateAppSettings({
    //     disable_auth_checks: true
    // });
    //
    // // re-enable auth checks
    // await serverSideClient.updateAppSettings({
    //     disable_auth_checks: false
    // });
    // // disable permission checks
    // await serverSideClient.updateAppSettings({
    //     disable_permissions_checks: true
    // });
    //
    // // re-enable permission checks
    // await serverSideClient.updateAppSettings({
    //     disable_permissions_checks: false
    // });
})();
