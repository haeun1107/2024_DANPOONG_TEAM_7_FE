// AnimatedLayout.jsx
import { usePageTransition } from '../../hooks/usePageTransition';
import styles from '../../styles/layout/AnimatedLayout.module.css';

const AnimatedLayout = ({ children }) => {
  const { transitionStage } = usePageTransition();

  console.log('현재 트랜지션 상태:', transitionStage);
  
  return (
    <div className={`${styles.pageTransition} ${styles[transitionStage]}`}>
      {children}
    </div>
  );
};

export default AnimatedLayout;