import React from "react";
import cx from "classnames";

import { ReactComponent as LoadingSvg } from "../../assets/img/loading.svg";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

type Props = {
  className?: string;
  show?: boolean;
};

const Loading: React.FC<Props> = (props) => {
  const { className, show } = props;

  return (
    <>
      {show && (
        <div data-testid="loading" className={cx("flex flex-col", className)}>
          <Logo className="mb-4" />
          <LoadingSvg />
        </div>
      )}
    </>
  );
};

Loading.defaultProps = {
  className: "",
  show: true,
};

export default Loading;
