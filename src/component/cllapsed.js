import React from 'react'

const cllapsed = () => {
    return (
        <div className="relative border-t border-l rounded-md border-gray">
          <div
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
            className="flex items-center justify-between gap-4 px-4 py-3 border-b border-r bg-gray-light border-gray"
          >
            <p className="text-sm font-medium capitalize max-w-[90%] truncate">
              {items?.section?.secNm || items?.secId?.secNm}
            </p>
            <DownIcon className={`${isExpanded ? "rotate-180" : ""}`} />
          </div>
          <div {...getCollapseProps()}>
            <div className="grid grid-cols-1 sm:grid-cols-9">
              <div className="flex items-center justify-between gap-1 px-4 py-3 border-b border-r sm:col-span-3 border-gray sm:flex-col sm:items-start">
                <p className="text-xs font-semibold capitalize">{t("score")}</p>
                <p className="text-xs font-semibold capitalize">
                  <b className="text-sm sm:text-xl text-primary">{items?.totalMarks}</b> / {items?.questionMarks}
                </p>
              </div>
              <div className="flex items-center justify-between gap-1 px-4 py-3 border-b border-r sm:col-span-3 border-gray sm:flex-col sm:items-start">
                <p className="text-xs font-semibold capitalize">{t("percenTage")}</p>
                <p className="text-sm font-semibold capitalize sm:text-xl text-primary">{items?.percentage} %</p>
              </div>
              {/* <div className="flex items-center justify-between gap-1 px-4 py-3 border-b border-r sm:col-span-2 border-gray sm:flex-col sm:items-start">
                <p className="text-xs font-semibold capitalize">percentile</p>
                <p className="text-sm font-semibold capitalize sm:text-xl text-primary">{items.percent}</p>
              </div> */}
              <div className="flex items-center justify-between gap-1 px-4 py-3 border-b border-r sm:col-span-3 border-gray sm:flex-col sm:items-start">
                <p className="text-xs font-semibold capitalize">{t("levels")}</p>
                <p className="text-sm font-semibold capitalize sm:text-xl text-primary">{items?.outcomes?.level || "-"}</p>
              </div>
              <div className="sm:col-span-10 border-r border-b border-gray px-4 py-3 flex flex-col gap-1.5">
                <p className="text-xs font-semibold capitalize">{t("comments")}</p>
                <ShowMoreContent className="text-xs" content={items?.outcomes?.desc} />
              </div>
            </div>
          </div>
        </div>
      )
    
}

export default cllapsed