// AWS-Amplify
import {
  withAuthenticator,
  WithAuthenticatorProps,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(config);

interface Props extends WithAuthenticatorProps {
  isPassedToWithAuthenticator: boolean;
  children: string | JSX.Element | JSX.Element[] | "() => JSX.Element";
}
const AuthWrapper = ({
  isPassedToWithAuthenticator,
  signOut,
  user,
  children,
}: Props) => {
  if (!isPassedToWithAuthenticator) {
    throw new Error(`isPassedToWithAuthenticator was not provided`);
  }
  return (
    <>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
      {children}
    </>
  );
};

export default withAuthenticator(AuthWrapper);

export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}
