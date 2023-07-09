import { configureStore } from "@reduxjs/toolkit";

import AllUsers from "./AllUsers";
import signedUser from "./SignedUser";

export const Store = configureStore({
    reducer : {
        AllUsers,
        signedUser,
    }
})

