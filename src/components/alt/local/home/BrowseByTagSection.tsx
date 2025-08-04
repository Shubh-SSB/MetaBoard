'use client';

import { useState, type FC } from "react";
import { Badge, Button, Card } from "../../ui";
import { Filter, X } from "lucide-react";


const BrowseByTagSection: FC = () => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const tagCategories = [
        {
            category: "Technology",
            tags: ["AI & Machine Learning", "Blockchain", "Cloud Computing", "Cybersecurity"]
        },
        {
            category: "Practice Areas",
            tags: ["Legal Technology", "Practice Management", "Digital Transformation", "Compliance"]
        },
        {
            category: "Innovation",
            tags: ["Automation", "Data Analytics", "Innovation", "Future of Law"]
        }
    ];

    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
    };

    const clearFilters = () => {
        setSelectedTags([]);
    };

    return (
        <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold">Browse by Topic</h3>
                </div>
                {selectedTags.length > 0 && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearFilters}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <X className="w-4 h-4 mr-1" />
                        Clear
                    </Button>
                )}
            </div>

            {/* Selected Tags */}
            {selectedTags.length > 0 && (
                <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Active Filters:</p>
                    <div className="flex flex-wrap gap-2">
                        {selectedTags.map((tag) => (
                            <Badge
                                key={tag}
                                variant="default"
                                className="cursor-pointer hover:bg-primary-hover"
                                // onClick={() => toggleTag(tag)}
                            >
                                {tag}
                                <X className="w-3 h-3 ml-1" />
                            </Badge>
                        ))}
                    </div>
                </div>
            )}

            {/* Tag Categories */}
            <div className="space-y-6">
                {tagCategories.map((category) => (
                    <div key={category.category}>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                            {category.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {category.tags.map((tag) => (
                                <Badge
                                    key={tag}
                                    variant={selectedTags.includes(tag) ? "default" : "secondary"}
                                    className={`cursor-pointer transition-all ${selectedTags.includes(tag)
                                            ? "bg-primary hover:bg-primary-hover"
                                            : "glass hover:bg-glass-hover"
                                        }`}
                                    // onClick={() => toggleTag(tag)}
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Stats */}
            <div className="mt-6 pt-4 border-t border-glass">
                <div className="text-xs text-glass space-y-1">
                    <p>Total articles: 127</p>
                    <p>
                        {selectedTags.length > 0
                            ? `Filtered: ${Math.floor(Math.random() * 30) + 10} articles`
                            : "Select tags to filter articles"
                        }
                    </p>
                </div>
            </div>
        </Card>
    );
}

export default BrowseByTagSection;