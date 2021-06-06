import { ResourcePicker } from "@shopify/app-bridge-react";
import { Heading, Page } from "@shopify/polaris";
import { useEffect, useState } from "react";
import ClientRouter from "./components/ClientRouter";
import createApp from "@shopify/app-bridge";
import { authenticatedFetch, getSessionToken } from "@shopify/app-bridge-utils";
import {Provider, useAppBridge} from '@shopify/app-bridge-react';


const Index = () => {
  const [session, setSession] = useState("aun no");
  const apiKey1 = JSON.stringify(process.env.SHOPIFY_API_KEY);
  let host = JSON.stringify(process.env.HOST);
  const app = useAppBridge();
  host = `${host}/admin`;
  const config = {
    apiKey: "247e0572025a8c90627c00d6060ad3a9",
    host: Buffer.from(host).toString("base64"),
  };
  authenticatedFetch()
  // const app = createApp(config);
  const handleSession = async () => {
    await getSessionToken(app).then((r) => setSession(r));
    console.log("Holaa");
  };
  const handleClick = async() => {
    console.log('Click dado')
    await getSessionToken(app).then((r) => setSession(r))
  }
  useEffect(() => {
    getSessionToken(app).then((r) => console.log(r));
  }, []);
  return (
    <Page>
      <Heading>{session} 🎉</Heading>
      <ClientRouter />
      <button onClick={handleClick}>Hola</button>
      <ResourcePicker resourceType="Product" open="false" />
    </Page>
  );
};

export default Index;
