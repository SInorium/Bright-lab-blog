import React from 'react';

export default function DateArticle({month, year}) {
    return (
        <div className="dateWerapper">
          <h2 className="datePost"> { month } <br/> { year } </h2>
        </div>
    )
} 