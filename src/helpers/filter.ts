import { Artist } from './types'

export const trackTitleFilter = (title: string) => (track: any) =>
	track.title?.toLowerCase().includes(title.toLowerCase())

export const artistNameFilter = (title: string) => (artist: Artist) =>
	artist.name?.toLowerCase().includes(title.toLowerCase())

export const playlistNameFilter = (title: string) => (playlist: Artist) =>
	playlist.name?.toLowerCase().includes(title.toLowerCase())
