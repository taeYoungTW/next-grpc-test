import styles from './Title.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Title = () => {
    return (
        <>
            <div className={cx('title')}>
                Test Title Component With Classnames, module scss
            </div>
        </>
    );
};

export default Title;
