const Title = ({ title }) => {
    return (
        <div className="group inline-flex gap-3 items-center mt-6 mb-8 px-8 relative overflow-hidden" >
            <p className="text-gray-700 dark:text-gray-200 font-semibold uppercase text-xl md:text-2xl tracking-wide relative z-10">
                {title}
            </p>

            <span className="w-12 h-[2px] bg-gradient-to-r from-gray-400 to-gray-700 relative z-10 animate-line-expand motion-reduce:animate-none" />
        </div>
    )
}

export default Title