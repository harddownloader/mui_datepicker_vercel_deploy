'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { CalendarToday } from "@mui/icons-material"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import ruLocale from "date-fns/locale/ru"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import SearchIcon from '@mui/icons-material/Search'
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined'
import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined'

export default function Home() {
  return (
    <>
    <LocalizationProvider
              dateAdapter={AdapterDateFns}
              // adapterLocale={ruLocale}
            >
              <DatePicker
                label="Дата поездки"
                // value={new Date()}
                // onChange={() => {}}
                // minDate={new Date()}
                // className={
                //   `${styles.date_picker__container} ${classNames}`
                // }
                // ref={refDatePicker}
                // onClose={() => setIsOpen(false)}
                // open={isOpen}
                // onOpen={() => setIsOpen(true)}
                // componentsProps={{
                //   textField: {
                //     // WHY it isn't works?
                //     InputProps: {
                //       // ...InputProps,
                //       startAdornment: (
                //         <InputAdornment position="start">
                //           <CalendarToday />
                //         </InputAdornment>
                //       ),
                //       endAdornment: null
                //     },
                //     // className: `${styles.date_picker__container} ${styles.date_picker__input} ${searchTicketsStyles.searchField} ${isLastElementInRow ? styles.last_el : ''}`,
                //     // onClick: (e) => setIsOpen(true),
                //   }
                // }}
              />
            </LocalizationProvider>
    </>
  )
}
