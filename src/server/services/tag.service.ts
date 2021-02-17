import { getRepository } from 'typeorm';
import { Tag } from '../../shared/dao';

class TagService {
    constructor() {}

    //
    getAll = () => {
        try {
            let allTags = getRepository(Tag).find();
            return allTags;
        } catch (error) {
            console.log("TagService: GetAll:", error);
            return null;
        }
    }

    //
    createNewTags = (tags: string[]) => {
        try {
            tags.forEach(async tag => {
                let tagToAdd = new Tag(tag);
                await getRepository(Tag).save(tagToAdd);
            });
            return tags;
        } catch (error) {
            console.log('TagService: CreateNewTags:', error);
            return null;
        }
    }
}

export const tagService = new TagService();