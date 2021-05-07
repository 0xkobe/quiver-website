import { PropsWithChildren, useState } from "react";
import Button from "../button/button";

type IProps = {
  className?: string;
};

export default function Newsletter(props: PropsWithChildren<IProps>) {
  const [email, setEmail] = useState("");

  return (
    <form
      className={props.className}
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <div className="lg:grid lg:grid-cols-4 lg:grid-flow-col-dense lg:gap-3">
        <input
          type="email"
          name="email"
          className="col-span-3 w-full p-3 border border-purple-200 rounded-full text-purple-900 text-base leading-6 font-medium focus:outline-none"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <button
          type="submit"
          className="whitespace-nowrap inline-flex items-center justify-center rounded-full text-base px-4 py-2 ring-1 ring-black ring-opacity-5 text-white bg-gradient-to-r from-primary to-secondary text-base leading-6 font-medium w-full mt-3 lg:mt-0"
        >
          Notify me
        </button>
      </div>
    </form>
  );
}
