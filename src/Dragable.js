import React from 'react';
import Draggable from 'react-draggable';

const Dragable = () => {
    return (
        <>
            <Draggable>
                <div className="box">
                    <div className="row">
                        <div className="col-6 first">
                            <div className='outer  '>
                                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, culpa nam?</p>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className='second outer position-absolute top-50 start-50 '>
                                <p className='text-center '>Lorem ipsum dolor sit amet </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Draggable>
        </>
    )
}

export default Dragable