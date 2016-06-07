---
---

var canvasEvents = {
  {% for film in site.data.films %}
    {% if film.titre2 %}
    '{{ film.date }}' : '<a href="http://www.imdb.com/title/{{ film.imdb | strip }}" target="_blank">{{ film.titre }}</a><br><a href="http://www.imdb.com/title/{{ film.imdb2 | strip }}" target="_blank">{{ film.titre2 }}</a>',
    {% else %}
    '{{ film.date }}' : '<a href="http://www.imdb.com/title/{{ film.imdb | strip }}" target="_blank">{{ film.titre }}</a>',
    {% endif %}
  {% endfor %}
};
