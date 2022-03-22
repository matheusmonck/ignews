import styles from './styles.module.scss';

import React from 'react';

export function SubscribeButton() {
  return (
    <button type='button' className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
