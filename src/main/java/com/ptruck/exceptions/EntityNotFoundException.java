package com.ptruck.exceptions;


import java.util.Map;
import java.util.stream.Collectors;

public class EntityNotFoundException extends HttpNotFoundException{

    public EntityNotFoundException(Class<?> clazz) {
        super(String.format("Entity '%s' not found", clazz.getSimpleName()));
    }

    public EntityNotFoundException(String id) {
        super(String.format("Entity with ID '%s' not found", id));
    }

    public EntityNotFoundException(Class<? > clazz, String id) {
        super(String.format("Entity '%s' with ID '%s' not found", clazz.getSimpleName(), id));
    }

    public EntityNotFoundException(Class<?> clazz, Map<String, String> ids) {
        super(String.format("Entity '%s' with '%s' not found", clazz.getSimpleName(), toIdPairsString(ids)));
    }

    public EntityNotFoundException(Class<?> parentClass, String parentId, Class<?> childClass, String childId) {
        super(String.format("Entity '%s' with ID '%s' not found within '%s' with ID '%s'",
            childClass.getSimpleName(), childId, parentClass.getSimpleName(), parentId));
    }

    private static String toIdPairsString(Map<String, String> ids) {
        return ids.entrySet().stream()
            .map(es -> es.getKey() + " = " + es.getValue())
            .collect(Collectors.joining(", "));
    }

}
