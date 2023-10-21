import React from 'react';
import {
  ExtensionsProvider,
  ExtensionAccountsProvider,
} from '@polkadot-cloud/react/providers';
import App from './App';

export default function AppWithProviders() {
  const [activeAccount, setActiveAccount] = React.useState();

  // Dapp identifier.
  const dappName = "Apps by TurboFlakes";
  // Active network, in lower case.
  const network = "polkadot";
  // SS58 prefix of the current network.
  const ss58 = 0;

  return (
    <ExtensionsProvider>
      <ExtensionAccountsProvider
        dappName={dappName}
        network={network}
        ss58={ss58}
        activeAccount={activeAccount}
        setActiveAccount={setActiveAccount}
      >
        <App />
      </ExtensionAccountsProvider>
    </ExtensionsProvider>
  )
}