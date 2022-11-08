import classNames from 'classnames/bind';
import styles from './LoginPage.module.scss';

export default function LoginPage() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('page')}>
        <button className={cx('button')}>Login fake</button>
      </div>
    </div>
  );
}
