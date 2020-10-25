/* eslint-disable */
import { ITvShow } from '../../../../types/interfaces';
import { MockImage } from '../../../_atoms/CastImage/__mocks__/MockImage';

export const MockShow: ITvShow = {
  "id": 31534,
  "url": "http://www.tvmaze.com/shows/31534/the-russell-howard-hour",
  "name": "The Russell Howard Hour",
  "type": "Talk Show",
  "language": "English",
  "genres": [
    "Comedy"
  ],
  "status": "Running",
  "runtime": 60,
  "premiered": "2017-09-21",
  "officialSite": "https://www.sky.com/watch/title/series/89419c88-0079-426a-b29b-bc28bc403a58/the-russell-howard-hour",
  "schedule": {
    "time": "22:00",
    "days": [
      "Thursday"
    ]
  },
  "rating": {
    "average": 8.4
  },
  "weight": 83,
  "network": {
    "id": 63,
    "name": "Sky 1",
    "country": {
      "name": "United Kingdom",
      "code": "GB",
      "timezone": "Europe/London"
    }
  },
  "webChannel": null,
  "externals": {
    "tvrage": null,
    "thetvdb": 334902,
    "imdb": "tt7544016"
  },
  "image": MockImage,
  "summary": "<p><b>The Russell Howard Hour</b> is a weekly talk show in which Russell Howard will be chatting with celebrity guests alongside comedy stand-up. </p>",
  "updated": 1603404686,
  "_links": {
    "self": {
      "href": "http://api.tvmaze.com/shows/31534"
    },
    "previousepisode": {
      "href": "http://api.tvmaze.com/episodes/1955660"
    },
    "nextepisode": {
      "href": "http://api.tvmaze.com/episodes/1955661"
    }
  },
  "_embedded": {
    "cast": [
      {
        "person": {
          "id": 64866,
          "url": "http://www.tvmaze.com/people/64866/russell-howard",
          "name": "Russell Howard",
          "country": {
            "name": "United Kingdom",
            "code": "GB",
            "timezone": "Europe/London"
          },
          "birthday": "1980-03-23",
          "deathday": null,
          "gender": "Male",
          "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/175/437607.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/175/437607.jpg"
          },
          "_links": {
            "self": {
              "href": "http://api.tvmaze.com/people/64866"
            }
          }
        },
        "character": {
          "id": 456592,
          "url": "http://www.tvmaze.com/characters/456592/the-russell-howard-hour-host",
          "name": "Host",
          "image": null,
          "_links": {
            "self": {
              "href": "http://api.tvmaze.com/characters/456592"
            }
          }
        },
        "self": true,
        "voice": false
      }
    ]
  }
};
