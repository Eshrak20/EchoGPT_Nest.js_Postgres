import {
    Module,
} from '@nestjs/common';

import {
    SearchController,
} from './search.controller.js';

import {
    SearchService,
} from './search.service.js';

import {
    TavilyProvider,
} from './providers/tavily.provider.js';

@Module({
    controllers: [
        SearchController,
    ],

    providers: [
        SearchService,
        TavilyProvider,
    ],

    exports: [
        SearchService,
    ],
})
export class SearchModule {}