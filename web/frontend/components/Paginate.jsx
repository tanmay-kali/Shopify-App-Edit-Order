

import React, { useEffect, useState, useMemo } from "react";
import { Card, Pagination } from '@shopify/polaris'

const PaginationComponent = ({
    total,
    itemsPerPage ,
    currentPage ,
    onPageChange
}) => {
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        if (total > 0 && itemsPerPage > 0)
            setTotalPages(Math.ceil(total / itemsPerPage));
    }, [total, itemsPerPage]);

    

    if (totalPages === 0) return null;
    
    return (
        <Card >
          <Card.Section >
        <Pagination
    hasPrevious
    onPrevious={() => {if(currentPage > 1)
        {onPageChange(currentPage - 1)}}}
    hasNext
    onNext={() => {if(currentPage < totalPages) 
        {onPageChange(currentPage + 1)}}}
  />
        </Card.Section>
        </Card>
    
    );
};

export default PaginationComponent;