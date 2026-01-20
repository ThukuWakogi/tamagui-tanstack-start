import { ToastProvider, ToastViewport } from "@tamagui/toast";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TamaguiProvider } from "tamagui";
import Header from "../components/Header";
import "../polyfills";
import appCss from "../styles.css?url";
import config from "../tamagui.config";
import { Toast } from "@/components/Toast";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TanStack Start Starter" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        <TamaguiProvider config={config}>
          <ToastProvider swipeDirection="horizontal" duration={6000}>
            {children}
            <Toast />
            <ToastViewport left={0} right={0} top={10} />
          </ToastProvider>
        </TamaguiProvider>
        <TanStackDevtools
          config={{ position: "bottom-right" }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
