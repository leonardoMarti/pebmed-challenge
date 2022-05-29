import { useContext } from 'react';
import { SubscriptionContext } from '../context/subscription';

export const useSubscription = () => {
  const { subscription, setSubscription } = useContext(SubscriptionContext);
  return { subscription, setSubscription };
};
