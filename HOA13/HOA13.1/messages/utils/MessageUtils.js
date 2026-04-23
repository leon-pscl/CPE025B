import PropTypes from 'prop-types';

let nextId = 0;

export const MessageShape = PropTypes.shape({
  id: PropTypes.number,
  type: PropTypes.string,
  text: PropTypes.string,
  uri: PropTypes.string,
  coordinate: PropTypes.object,
});

export const createTextMessage = (text) => ({
  id: nextId++,
  type: 'text',
  text,
});

export const createImageMessage = (uri) => ({
  id: nextId++,
  type: 'image',
  uri,
});
