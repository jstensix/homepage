import React, { useEffect, useState } from "react";
import Tabs from "../../../../components/Tabs";
import styles from "../../../../styles/policy/FinnqPolicy.module.scss";
import RewordPage1 from "../load-reword/RewordPage1";
import RewordPage2 from "../load-reword/RewordPage2";

const content = {
  0: <LoadReword1 />,
  1: <LoadReword2 />,
};

function LoadReword1() {
  return <RewordPage1 />;
}

function LoadReword2() {
  return <RewordPage2 />;
}

const TermsRewordPage = () => {
  const [tabNum, setTabNum] = useState(0);

  useEffect(() => {
    const selectGroup = document.querySelector(".select-group");
    let openCheck = selectGroup.classList.contains("select-open");

    // document.querySelector(".contents").addEventListener("click", () => {
    //   selectGroup.classList.remove("select-open");
    // });

    const selectEvent = document.querySelectorAll(".target");

    selectEvent.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        selectEvent[i].classList.remove("is-active");
        setTabNum(i);

        item.classList.add("is-active");

        if (openCheck) {
          selectGroup.classList.remove("select-open");
        } else {
          selectGroup.classList.add("select-open");
        }
        e.target.className = "is-active";
      });
    });
  }, []);

  return (
    <article className={`${styles["terms"]} contents-details`}>
      <div className="notice-wrap width-fix">
        <div className="select-group">
          <ul>
            <li className="is-active target">
              <a href="#none">2018.05.02</a>
            </li>
            <li className="target">
              <a href="#none">2019.06.01</a>
            </li>
          </ul>
        </div>

        <article className="load-area">{content[tabNum]}</article>
      </div>
    </article>
  );
};

export default TermsRewordPage;