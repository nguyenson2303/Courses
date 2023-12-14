import styles from './Header.module.scss';
import classNames from 'classnames/bind'; //import classnames vào để dùng css gọn hơn.

import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

/*
_ Vào Terminal chạy câu lệnh để cài thư viện classnames: npm i classnames.
_ Comment bằng cách ấn: Shift + Alt + A.
*/

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok" />
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />{' '}
                    {/* spellCheck Dùng kiểm tra chính tả */}
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
