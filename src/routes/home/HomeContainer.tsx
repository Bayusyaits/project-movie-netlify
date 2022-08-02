import React, { useCallback, useEffect } from "react";
import { selectHomeData } from "./homeSelector";
import HomeView, { ViewProps } from "./HomeView";

function HomeContainer() {
    return (
        <HomeView />
    );
}

export default HomeContainer;
