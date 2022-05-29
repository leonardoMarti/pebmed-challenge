import React, { createContext, ReactNode, useState } from 'react';

export const SubscriptionContext = createContext(null);

interface SubscriptionContextProps {
  children: ReactNode;
}

export const SubscriptioContextProvider = ({
  children,
}: SubscriptionContextProps) => {
  const [subscription, setSubscription] = useState();

  const context = {
    subscription,
    setSubscription,
  };

  return (
    <SubscriptionContext.Provider value={context}>
      {children}
    </SubscriptionContext.Provider>
  );
};
