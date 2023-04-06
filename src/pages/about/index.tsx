import { useEmotionCss } from '@ant-design/use-emotion-css';

export const About = () => {
  const app = useEmotionCss(() => {
    return {
      textAlign: 'center'
    };
  });

  return (
    <div className={app}>
      <p>HoTaoShell 关于</p>
    </div>
  );
};
