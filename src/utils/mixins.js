import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      return datetime ? moment(datetime).fromNow() : '-'
    }
  }
}

export const emptyImageFilter = {
  emptyImage(src) {
    return src || 'https://loremflickr.com/320/240/restaurant,food/?random=52.129930969408036'
  }
}