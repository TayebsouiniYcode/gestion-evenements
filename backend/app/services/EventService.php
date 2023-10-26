<?php

namespace App\Services;

use App\Event;
use function PHPUnit\Framework\isEmpty;

class EventService {
    public function createEvent(Event $event) {
        Event::create([
            "name" => $event->getName(),
            "description" => $event->getDescription()
        ]);
    }
}
