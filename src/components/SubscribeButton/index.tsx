import styles from './styles.module.scss';

import React from 'react';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button type='button' className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
