import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div className={s.item}>
                    Varvara
                </div>
                <div className={s.item}>
                    Oleksandr
                </div>
                <div className={s.item}>
                    Polina
                </div>

            </div>

            <div>

            </div>
        </div>
    )
}

export default Dialogs;