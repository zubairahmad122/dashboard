
const OverviewCrad = ({name,des,num}) => {
    return (
        <div className="max-xsm:w-full">
            <p className="font-Inter text-sm text-grey4">{name}</p>
            <div className="flex items-center gap-4">
                <p className="text-base-medium font-Inter text-grey6 ">{des}</p>
                <p className="text-lg mb-2 text-sucess-1 font-Inter">{num}</p>
            </div>
        </div>
    )
}

export default OverviewCrad