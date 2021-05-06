import { PropsWithChildren, useState } from "react";
import Button from "../button/button";

type IProps = {
  className?: string;
};

export default function Newsletter(props: PropsWithChildren<IProps>) {
  const [email, setEmail] = useState("");
  const submit = (e) => {
    console.log(e);
  };

  return (
    <form className={props.className}>
      <div className="lg:grid lg:grid-cols-4 lg:grid-flow-col-dense lg:gap-3">
        <input
          type="email"
          className="col-span-3 w-full p-3 border border-purple-200 rounded-full text-purple-900 text-base leading-6 font-medium focus:outline-none"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Button
          onClick={submit}
          className="text-base leading-6 font-medium w-full mt-3 lg:mt-0"
        >
          Notify me
        </Button>
      </div>
    </form>
  );
}
