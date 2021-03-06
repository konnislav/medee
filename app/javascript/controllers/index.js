// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import ConvertMidiToJsonController from "./convert_midi_to_json_controller.js"
application.register("convert-midi-to-json", ConvertMidiToJsonController)

import PlayMidiController from "./play_midi_controller.js"
application.register("play-midi", PlayMidiController)

import ProfileTabsController from "./profile_tabs_controller.js"
application.register("profile-tabs", ProfileTabsController)

import SearchMidisController from "./search_midis_controller.js"
application.register("search-midis", SearchMidisController)

import UpdateMidiController from "./update_midi_controller.js"
application.register("update-midi", UpdateMidiController)

import IncreaseDownloadController from "./increase_download_controller.js"
application.register("increase-download", IncreaseDownloadController)
