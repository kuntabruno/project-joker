import { Fragment } from "react";

import DocHead from "src/@joker/common/components/DocHead";
import SidebarLayout from "src/@joker/common/components/SidebarLayout";

import styles from "./JokeDetailDefinedError.module.scss";

export default function JokeDetailDefinedErrorComponent({ headTitle, headDescription, errorMessage }: { headTitle: string, headDescription: string, errorMessage: string}) {
   return (
      <Fragment>
        <DocHead
          title={headTitle}
          description={headDescription}
        ></DocHead>
        <SidebarLayout>
          <div className={styles.jokeErrorSection}>
              <div className="flex flex-col justify-center mt-20 mx-4 h-full">
                   <span className="text-center font-semibold text-gray-400 text-2xl">{errorMessage}</span>
              </div>
          </div>
        </SidebarLayout>
      </Fragment>
   )
}