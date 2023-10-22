import {
    useExtensions,
    useExtensionAccounts,
  } from '@polkadot-cloud/react/hooks';

export default function ConnectAccounts() {
  const { extensions, extensionsStatus, checkingInjectedWeb3 } = useExtensions();
  const { connectExtensionAccounts } = useExtensionAccounts();
  
  console.log("extensions", extensions, extensionsStatus, checkingInjectedWeb3);
  const extension = extensions.find((e) => e.id === 'subwallet-js');

  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (extension) connectExtensionAccounts(extension);
        }}
      >
        Connect to Subwallet JS
      </button>
    </>
  );
};