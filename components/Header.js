import headerStyles from '../styles/Header.module.css'

const Header = () => {
    const x = 2
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> News
            </h1>
            {/* This isn't the best way to add style, but you could do this if you want to add dynamic styling
                Use className='title'
            <style jsx>
                {
                    `
                    .title {
                        color: ${x > 3 ? 'red' : 'blue'};
                    }
                `}
            </style> */}
            <p className={headerStyles.description}>Keep up to date with the latest web dev news</p>
        </div>
    )
}

export default Header;