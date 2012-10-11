/**
 *   continuity.js - A library for interacting with Ubuntu's Unity Web API.
 *   Copyright (C) 2012 Benjamin Oakes
 *
 *   This program is free software; you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation; either version 2 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License along
 *   with this program; if not, write to the Free Software Foundation, Inc.,
 *   51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
var external, continuity;

continuity = (function () {
  function ready(opts, success, error) {
    var unity;
    
    try {
      unity = external.getUnityObject(1.0);
      opts.onInit = function () { success(unity) };
      unity.init(opts);
    } catch (e) {
      error && error(e);
    }
  }

  return {
    ready: ready
  };
}());
