/**
 * LINE Messaging API
 * This document describes LINE Messaging API.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-locals */
import { AudienceMatchMessagesRequest } from '../model/audienceMatchMessagesRequest';
import { BotInfoResponse } from '../model/botInfoResponse';
import { BroadcastRequest } from '../model/broadcastRequest';
import { CreateRichMenuAliasRequest } from '../model/createRichMenuAliasRequest';
import { ErrorResponse } from '../model/errorResponse';
import { GetAggregationUnitNameListResponse } from '../model/getAggregationUnitNameListResponse';
import { GetAggregationUnitUsageResponse } from '../model/getAggregationUnitUsageResponse';
import { GetFollowersResponse } from '../model/getFollowersResponse';
import { GetWebhookEndpointResponse } from '../model/getWebhookEndpointResponse';
import { GroupMemberCountResponse } from '../model/groupMemberCountResponse';
import { GroupSummaryResponse } from '../model/groupSummaryResponse';
import { GroupUserProfileResponse } from '../model/groupUserProfileResponse';
import { IssueLinkTokenResponse } from '../model/issueLinkTokenResponse';
import { MarkMessagesAsReadRequest } from '../model/markMessagesAsReadRequest';
import { MembersIdsResponse } from '../model/membersIdsResponse';
import { MessageQuotaResponse } from '../model/messageQuotaResponse';
import { MulticastRequest } from '../model/multicastRequest';
import { NarrowcastProgressResponse } from '../model/narrowcastProgressResponse';
import { NarrowcastRequest } from '../model/narrowcastRequest';
import { NumberOfMessagesResponse } from '../model/numberOfMessagesResponse';
import { PnpMessagesRequest } from '../model/pnpMessagesRequest';
import { PushMessageRequest } from '../model/pushMessageRequest';
import { PushMessageResponse } from '../model/pushMessageResponse';
import { QuotaConsumptionResponse } from '../model/quotaConsumptionResponse';
import { ReplyMessageRequest } from '../model/replyMessageRequest';
import { ReplyMessageResponse } from '../model/replyMessageResponse';
import { RichMenuAliasListResponse } from '../model/richMenuAliasListResponse';
import { RichMenuAliasResponse } from '../model/richMenuAliasResponse';
import { RichMenuBatchProgressResponse } from '../model/richMenuBatchProgressResponse';
import { RichMenuBatchRequest } from '../model/richMenuBatchRequest';
import { RichMenuBulkLinkRequest } from '../model/richMenuBulkLinkRequest';
import { RichMenuBulkUnlinkRequest } from '../model/richMenuBulkUnlinkRequest';
import { RichMenuIdResponse } from '../model/richMenuIdResponse';
import { RichMenuListResponse } from '../model/richMenuListResponse';
import { RichMenuRequest } from '../model/richMenuRequest';
import { RichMenuResponse } from '../model/richMenuResponse';
import { RoomMemberCountResponse } from '../model/roomMemberCountResponse';
import { RoomUserProfileResponse } from '../model/roomUserProfileResponse';
import { SetWebhookEndpointRequest } from '../model/setWebhookEndpointRequest';
import { TestWebhookEndpointRequest } from '../model/testWebhookEndpointRequest';
import { TestWebhookEndpointResponse } from '../model/testWebhookEndpointResponse';
import { UpdateRichMenuAliasRequest } from '../model/updateRichMenuAliasRequest';
import { UserProfileResponse } from '../model/userProfileResponse';
import { ValidateMessageRequest } from '../model/validateMessageRequest';
import * as Types from "../../types";
import {ensureJSON} from "../../utils";
import {Readable} from "stream";

import { RequestFile } from '../../http';
import HTTPClient from "../../http";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


interface httpClientConfig {
    baseURL?: string;
    // TODO support defaultHeaders?
}


export class MessagingApiClient {
    private httpClient: HTTPClient;

    constructor(config: httpClientConfig = {}) {
        if (!config.baseURL) {
            config.baseURL = 'https://api.line.me';
        }
        this.httpClient = new HTTPClient(config);
    }

    /**
     * Send a message using phone number
     * @param audienceMatchMessagesRequest 
     */
    public async audienceMatch(audienceMatchMessagesRequest: AudienceMatchMessagesRequest, ) : Promise<Types.MessageAPIResponseBase> {
        

        const params = audienceMatchMessagesRequest;




        const res = this.httpClient.post(
            "/bot/ad/multicast/phone",
            params,
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Sends a message to multiple users at any time.
     * @param broadcastRequest 
     * @param xLineRetryKey Retry key. Specifies the UUID in hexadecimal format (e.g., &#x60;123e4567-e89b-12d3-a456-426614174000&#x60;) generated by any method. The retry key isn\&#39;t generated by LINE. Each developer must generate their own retry key. 
     */
    public async broadcast(broadcastRequest: BroadcastRequest, xLineRetryKey?: string, ) : Promise<object> {
        

        const params = broadcastRequest;



        const headers = {}; // header params
        headers["X-Line-Retry-Key"] = xLineRetryKey;

        const res = this.httpClient.post<object>(
            "/v2/bot/message/broadcast",
            params,
            
            
            { headers },
        );
        return ensureJSON(res);
    }
    /**
     * Cancel default rich menu
     */
    public async cancelDefaultRichMenu() : Promise<Types.MessageAPIResponseBase> {
        





        const res = this.httpClient.delete(
            "/v2/bot/user/all/richmenu",
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Create rich menu
     * @param richMenuRequest 
     */
    public async createRichMenu(richMenuRequest: RichMenuRequest, ) : Promise<RichMenuIdResponse> {
        

        const params = richMenuRequest;




        const res = this.httpClient.post<RichMenuIdResponse>(
            "/v2/bot/richmenu",
            params,
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Create rich menu alias
     * @param createRichMenuAliasRequest 
     */
    public async createRichMenuAlias(createRichMenuAliasRequest: CreateRichMenuAliasRequest, ) : Promise<Types.MessageAPIResponseBase> {
        

        const params = createRichMenuAliasRequest;




        const res = this.httpClient.post(
            "/v2/bot/richmenu/alias",
            params,
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Deletes a rich menu.
     * @param richMenuId ID of a rich menu
     */
    public async deleteRichMenu(richMenuId: string, ) : Promise<Types.MessageAPIResponseBase> {
        





        const res = this.httpClient.delete(
            "/v2/bot/richmenu/{richMenuId}".replace("{richMenuId}", String(richMenuId)),
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Delete rich menu alias
     * @param richMenuAliasId Rich menu alias ID that you want to delete.
     */
    public async deleteRichMenuAlias(richMenuAliasId: string, ) : Promise<Types.MessageAPIResponseBase> {
        





        const res = this.httpClient.delete(
            "/v2/bot/richmenu/alias/{richMenuAliasId}".replace("{richMenuAliasId}", String(richMenuAliasId)),
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Get result of message delivery using phone number
     * @param date Date the message was sent  Format: &#x60;yyyyMMdd&#x60; (e.g. &#x60;20190831&#x60;) Time Zone: UTC+9 
     */
    public async getAdPhoneMessageStatistics(date: string, ) : Promise<NumberOfMessagesResponse> {
        



        const params = {}; // form params
        params["date"] = date;


        const res = this.httpClient.get<NumberOfMessagesResponse>(
            "/v2/bot/message/delivery/ad_phone",
            
            
            params,
            
        );
        return ensureJSON(res);
    }
    /**
     * Get name list of units used this month
     * @param limit The maximum number of aggregation units you can get per request. 
     * @param start Value of the continuation token found in the next property of the JSON object returned in the response. If you can\&#39;t get all the aggregation units in one request, include this parameter to get the remaining array. 
     */
    public async getAggregationUnitNameList(limit?: string, start?: string, ) : Promise<GetAggregationUnitNameListResponse> {
        



        const params = {}; // form params
        params["limit"] = limit;
        params["start"] = start;


        const res = this.httpClient.get<GetAggregationUnitNameListResponse>(
            "/v2/bot/message/aggregation/list",
            
            
            params,
            
        );
        return ensureJSON(res);
    }
    /**
     * Get number of units used this month
     */
    public async getAggregationUnitUsage() : Promise<GetAggregationUnitUsageResponse> {
        





        const res = this.httpClient.get<GetAggregationUnitUsageResponse>(
            "/v2/bot/message/aggregation/info",
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Get bot info
     */
    public async getBotInfo() : Promise<BotInfoResponse> {
        





        const res = this.httpClient.get<BotInfoResponse>(
            "/v2/bot/info",
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Gets the ID of the default rich menu set with the Messaging API.
     */
    public async getDefaultRichMenuId() : Promise<RichMenuIdResponse> {
        





        const res = this.httpClient.get<RichMenuIdResponse>(
            "/v2/bot/user/all/richmenu",
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Get a list of users who added your LINE Official Account as a friend
     * @param start Value of the continuation token found in the next property of the JSON object returned in the response. Include this parameter to get the next array of user IDs. 
     * @param limit The maximum number of user IDs to retrieve in a single request.
     */
    public async getFollowers(start?: string, limit?: number, ) : Promise<GetFollowersResponse> {
        



        const params = {}; // form params
        params["start"] = start;
        params["limit"] = limit;


        const res = this.httpClient.get<GetFollowersResponse>(
            "/v2/bot/followers/ids",
            
            
            params,
            
        );
        return ensureJSON(res);
    }
    /**
     * Get number of users in a group chat
     * @param groupId Group ID
     */
    public async getGroupMemberCount(groupId: string, ) : Promise<GroupMemberCountResponse> {
        





        const res = this.httpClient.get<GroupMemberCountResponse>(
            "/v2/bot/group/{groupId}/members/count".replace("{groupId}", String(groupId)),
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Get group chat member profile
     * @param groupId Group ID
     * @param userId User ID
     */
    public async getGroupMemberProfile(groupId: string, userId: string, ) : Promise<GroupUserProfileResponse> {
        





        const res = this.httpClient.get<GroupUserProfileResponse>(
            "/v2/bot/group/{groupId}/member/{userId}".replace("{groupId}", String(groupId)).replace("{userId}", String(userId)),
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Get group chat member user IDs
     * @param groupId Group ID
     * @param start Value of the continuation token found in the &#x60;next&#x60; property of the JSON object returned in the response. Include this parameter to get the next array of user IDs for the members of the group. 
     */
    public async getGroupMembersIds(groupId: string, start?: string, ) : Promise<MembersIdsResponse> {
        



        const params = {}; // form params
        params["start"] = start;


        const res = this.httpClient.get<MembersIdsResponse>(
            "/v2/bot/group/{groupId}/members/ids".replace("{groupId}", String(groupId)),
            
            
            params,
            
        );
        return ensureJSON(res);
    }
    /**
     * Get group chat summary
     * @param groupId Group ID
     */
    public async getGroupSummary(groupId: string, ) : Promise<GroupSummaryResponse> {
        





        const res = this.httpClient.get<GroupSummaryResponse>(
            "/v2/bot/group/{groupId}/summary".replace("{groupId}", String(groupId)),
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Gets the target limit for sending messages in the current month. The total number of the free messages and the additional messages is returned.
     */
    public async getMessageQuota() : Promise<MessageQuotaResponse> {
        





        const res = this.httpClient.get<MessageQuotaResponse>(
            "/v2/bot/message/quota",
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Gets the number of messages sent in the current month.
     */
    public async getMessageQuotaConsumption() : Promise<QuotaConsumptionResponse> {
        





        const res = this.httpClient.get<QuotaConsumptionResponse>(
            "/v2/bot/message/quota/consumption",
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Gets the status of a narrowcast message.
     * @param requestId The narrowcast message\&#39;s request ID. Each Messaging API request has a request ID.
     */
    public async getNarrowcastProgress(requestId: string, ) : Promise<NarrowcastProgressResponse> {
        



        const params = {}; // form params
        params["requestId"] = requestId;


        const res = this.httpClient.get<NarrowcastProgressResponse>(
            "/v2/bot/message/progress/narrowcast",
            
            
            params,
            
        );
        return ensureJSON(res);
    }
    /**
     * Get number of sent broadcast messages
     * @param date Date the messages were sent  Format: yyyyMMdd (e.g. 20191231) Timezone: UTC+9 
     */
    public async getNumberOfSentBroadcastMessages(date: string, ) : Promise<NumberOfMessagesResponse> {
        



        const params = {}; // form params
        params["date"] = date;


        const res = this.httpClient.get<NumberOfMessagesResponse>(
            "/v2/bot/message/delivery/broadcast",
            
            
            params,
            
        );
        return ensureJSON(res);
    }
    /**
     * Get number of sent multicast messages
     * @param date Date the messages were sent  Format: &#x60;yyyyMMdd&#x60; (e.g. &#x60;20191231&#x60;) Timezone: UTC+9 
     */
    public async getNumberOfSentMulticastMessages(date: string, ) : Promise<NumberOfMessagesResponse> {
        



        const params = {}; // form params
        params["date"] = date;


        const res = this.httpClient.get<NumberOfMessagesResponse>(
            "/v2/bot/message/delivery/multicast",
            
            
            params,
            
        );
        return ensureJSON(res);
    }
    /**
     * Get number of sent push messages
     * @param date Date the messages were sent  Format: &#x60;yyyyMMdd&#x60; (e.g. &#x60;20191231&#x60;) Timezone: UTC+9 
     */
    public async getNumberOfSentPushMessages(date: string, ) : Promise<NumberOfMessagesResponse> {
        



        const params = {}; // form params
        params["date"] = date;


        const res = this.httpClient.get<NumberOfMessagesResponse>(
            "/v2/bot/message/delivery/push",
            
            
            params,
            
        );
        return ensureJSON(res);
    }
    /**
     * Get number of sent reply messages
     * @param date Date the messages were sent  Format: &#x60;yyyyMMdd&#x60; (e.g. &#x60;20191231&#x60;) Timezone: UTC+9 
     */
    public async getNumberOfSentReplyMessages(date: string, ) : Promise<NumberOfMessagesResponse> {
        



        const params = {}; // form params
        params["date"] = date;


        const res = this.httpClient.get<NumberOfMessagesResponse>(
            "/v2/bot/message/delivery/reply",
            
            
            params,
            
        );
        return ensureJSON(res);
    }
    /**
     * Get number of sent LINE notification messages　
     * @param date Date the message was sent  Format: &#x60;yyyyMMdd&#x60; (Example:&#x60;20211231&#x60;) Time zone: UTC+9 
     */
    public async getPNPMessageStatistics(date: string, ) : Promise<NumberOfMessagesResponse> {
        



        const params = {}; // form params
        params["date"] = date;


        const res = this.httpClient.get<NumberOfMessagesResponse>(
            "/v2/bot/message/delivery/pnp",
            
            
            params,
            
        );
        return ensureJSON(res);
    }
    /**
     * Get profile
     * @param userId User ID
     */
    public async getProfile(userId: string, ) : Promise<UserProfileResponse> {
        





        const res = this.httpClient.get<UserProfileResponse>(
            "/v2/bot/profile/{userId}".replace("{userId}", String(userId)),
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Gets a rich menu via a rich menu ID.
     * @param richMenuId ID of a rich menu
     */
    public async getRichMenu(richMenuId: string, ) : Promise<RichMenuResponse> {
        





        const res = this.httpClient.get<RichMenuResponse>(
            "/v2/bot/richmenu/{richMenuId}".replace("{richMenuId}", String(richMenuId)),
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Get rich menu alias information
     * @param richMenuAliasId The rich menu alias ID whose information you want to obtain.
     */
    public async getRichMenuAlias(richMenuAliasId: string, ) : Promise<RichMenuAliasResponse> {
        





        const res = this.httpClient.get<RichMenuAliasResponse>(
            "/v2/bot/richmenu/alias/{richMenuAliasId}".replace("{richMenuAliasId}", String(richMenuAliasId)),
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Get list of rich menu alias
     */
    public async getRichMenuAliasList() : Promise<RichMenuAliasListResponse> {
        





        const res = this.httpClient.get<RichMenuAliasListResponse>(
            "/v2/bot/richmenu/alias/list",
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Get the status of Replace or unlink a linked rich menus in batches.
     * @param requestId A request ID used to batch control the rich menu linked to the user. Each Messaging API request has a request ID.
     */
    public async getRichMenuBatchProgress(requestId: string, ) : Promise<RichMenuBatchProgressResponse> {
        



        const params = {}; // form params
        params["requestId"] = requestId;


        const res = this.httpClient.get<RichMenuBatchProgressResponse>(
            "/v2/bot/richmenu/progress/batch",
            
            
            params,
            
        );
        return ensureJSON(res);
    }
    /**
     * Get rich menu ID of user
     * @param userId User ID. Found in the &#x60;source&#x60; object of webhook event objects. Do not use the LINE ID used in LINE.
     */
    public async getRichMenuIdOfUser(userId: string, ) : Promise<RichMenuIdResponse> {
        





        const res = this.httpClient.get<RichMenuIdResponse>(
            "/v2/bot/user/{userId}/richmenu".replace("{userId}", String(userId)),
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Get rich menu list
     */
    public async getRichMenuList() : Promise<RichMenuListResponse> {
        





        const res = this.httpClient.get<RichMenuListResponse>(
            "/v2/bot/richmenu/list",
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Get number of users in a multi-person chat
     * @param roomId Room ID
     */
    public async getRoomMemberCount(roomId: string, ) : Promise<RoomMemberCountResponse> {
        





        const res = this.httpClient.get<RoomMemberCountResponse>(
            "/v2/bot/room/{roomId}/members/count".replace("{roomId}", String(roomId)),
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Get multi-person chat member profile
     * @param roomId Room ID
     * @param userId User ID
     */
    public async getRoomMemberProfile(roomId: string, userId: string, ) : Promise<RoomUserProfileResponse> {
        





        const res = this.httpClient.get<RoomUserProfileResponse>(
            "/v2/bot/room/{roomId}/member/{userId}".replace("{roomId}", String(roomId)).replace("{userId}", String(userId)),
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Get multi-person chat member user IDs
     * @param roomId Room ID
     * @param start Value of the continuation token found in the &#x60;next&#x60; property of the JSON object returned in the response. Include this parameter to get the next array of user IDs for the members of the group. 
     */
    public async getRoomMembersIds(roomId: string, start?: string, ) : Promise<MembersIdsResponse> {
        



        const params = {}; // form params
        params["start"] = start;


        const res = this.httpClient.get<MembersIdsResponse>(
            "/v2/bot/room/{roomId}/members/ids".replace("{roomId}", String(roomId)),
            
            
            params,
            
        );
        return ensureJSON(res);
    }
    /**
     * Get webhook endpoint information
     */
    public async getWebhookEndpoint() : Promise<GetWebhookEndpointResponse> {
        





        const res = this.httpClient.get<GetWebhookEndpointResponse>(
            "/v2/bot/channel/webhook/endpoint",
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Issue link token
     * @param userId User ID for the LINE account to be linked. Found in the &#x60;source&#x60; object of account link event objects. Do not use the LINE ID used in LINE. 
     */
    public async issueLinkToken(userId: string, ) : Promise<IssueLinkTokenResponse> {
        





        const res = this.httpClient.post<IssueLinkTokenResponse>(
            "/v2/bot/user/{userId}/linkToken".replace("{userId}", String(userId)),
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Leave group chat
     * @param groupId Group ID
     */
    public async leaveGroup(groupId: string, ) : Promise<Types.MessageAPIResponseBase> {
        





        const res = this.httpClient.post(
            "/v2/bot/group/{groupId}/leave".replace("{groupId}", String(groupId)),
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Leave multi-person chat
     * @param roomId Room ID
     */
    public async leaveRoom(roomId: string, ) : Promise<Types.MessageAPIResponseBase> {
        





        const res = this.httpClient.post(
            "/v2/bot/room/{roomId}/leave".replace("{roomId}", String(roomId)),
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Link rich menu to user.
     * @param userId User ID. Found in the &#x60;source&#x60; object of webhook event objects. Do not use the LINE ID used in LINE.
     * @param richMenuId ID of a rich menu
     */
    public async linkRichMenuIdToUser(userId: string, richMenuId: string, ) : Promise<Types.MessageAPIResponseBase> {
        





        const res = this.httpClient.post(
            "/v2/bot/user/{userId}/richmenu/{richMenuId}".replace("{userId}", String(userId)).replace("{richMenuId}", String(richMenuId)),
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Link rich menu to multiple users
     * @param richMenuBulkLinkRequest 
     */
    public async linkRichMenuIdToUsers(richMenuBulkLinkRequest: RichMenuBulkLinkRequest, ) : Promise<Types.MessageAPIResponseBase> {
        

        const params = richMenuBulkLinkRequest;




        const res = this.httpClient.post(
            "/v2/bot/richmenu/bulk/link",
            params,
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Mark messages from users as read
     * @param markMessagesAsReadRequest 
     */
    public async markMessagesAsRead(markMessagesAsReadRequest: MarkMessagesAsReadRequest, ) : Promise<Types.MessageAPIResponseBase> {
        

        const params = markMessagesAsReadRequest;




        const res = this.httpClient.post(
            "/v2/bot/message/markAsRead",
            params,
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * An API that efficiently sends the same message to multiple user IDs. You can\'t send messages to group chats or multi-person chats.
     * @param multicastRequest 
     * @param xLineRetryKey Retry key. Specifies the UUID in hexadecimal format (e.g., &#x60;123e4567-e89b-12d3-a456-426614174000&#x60;) generated by any method. The retry key isn\&#39;t generated by LINE. Each developer must generate their own retry key. 
     */
    public async multicast(multicastRequest: MulticastRequest, xLineRetryKey?: string, ) : Promise<object> {
        

        const params = multicastRequest;



        const headers = {}; // header params
        headers["X-Line-Retry-Key"] = xLineRetryKey;

        const res = this.httpClient.post<object>(
            "/v2/bot/message/multicast",
            params,
            
            
            { headers },
        );
        return ensureJSON(res);
    }
    /**
     * Send narrowcast message
     * @param narrowcastRequest 
     * @param xLineRetryKey Retry key. Specifies the UUID in hexadecimal format (e.g., &#x60;123e4567-e89b-12d3-a456-426614174000&#x60;) generated by any method. The retry key isn\&#39;t generated by LINE. Each developer must generate their own retry key. 
     */
    public async narrowcast(narrowcastRequest: NarrowcastRequest, xLineRetryKey?: string, ) : Promise<object> {
        

        const params = narrowcastRequest;



        const headers = {}; // header params
        headers["X-Line-Retry-Key"] = xLineRetryKey;

        const res = this.httpClient.post<object>(
            "/v2/bot/message/narrowcast",
            params,
            
            
            { headers },
        );
        return ensureJSON(res);
    }
    /**
     * Sends a message to a user, group chat, or multi-person chat at any time.
     * @param pushMessageRequest 
     * @param xLineRetryKey Retry key. Specifies the UUID in hexadecimal format (e.g., &#x60;123e4567-e89b-12d3-a456-426614174000&#x60;) generated by any method. The retry key isn\&#39;t generated by LINE. Each developer must generate their own retry key. 
     */
    public async pushMessage(pushMessageRequest: PushMessageRequest, xLineRetryKey?: string, ) : Promise<PushMessageResponse> {
        

        const params = pushMessageRequest;



        const headers = {}; // header params
        headers["X-Line-Retry-Key"] = xLineRetryKey;

        const res = this.httpClient.post<PushMessageResponse>(
            "/v2/bot/message/push",
            params,
            
            
            { headers },
        );
        return ensureJSON(res);
    }
    /**
     * Send LINE notification message
     * @param pnpMessagesRequest 
     * @param xLineDeliveryTag String returned in the delivery.data property of the delivery completion event via Webhook.
     */
    public async pushMessagesByPhone(pnpMessagesRequest: PnpMessagesRequest, xLineDeliveryTag?: string, ) : Promise<Types.MessageAPIResponseBase> {
        

        const params = pnpMessagesRequest;



        const headers = {}; // header params
        headers["X-Line-Delivery-Tag"] = xLineDeliveryTag;

        const res = this.httpClient.post(
            "/bot/pnp/push",
            params,
            
            
            { headers },
        );
        return ensureJSON(res);
    }
    /**
     * Send reply message
     * @param replyMessageRequest 
     */
    public async replyMessage(replyMessageRequest: ReplyMessageRequest, ) : Promise<ReplyMessageResponse> {
        

        const params = replyMessageRequest;




        const res = this.httpClient.post<ReplyMessageResponse>(
            "/v2/bot/message/reply",
            params,
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * You can use this endpoint to batch control the rich menu linked to the users using the endpoint such as Link rich menu to user.  The following operations are available:  1. Replace a rich menu with another rich menu for all users linked to a specific rich menu 2. Unlink a rich menu for all users linked to a specific rich menu 3. Unlink a rich menu for all users linked the rich menu 
     * @param richMenuBatchRequest 
     */
    public async richMenuBatch(richMenuBatchRequest: RichMenuBatchRequest, ) : Promise<Types.MessageAPIResponseBase> {
        

        const params = richMenuBatchRequest;




        const res = this.httpClient.post(
            "/v2/bot/richmenu/batch",
            params,
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Set default rich menu
     * @param richMenuId ID of a rich menu
     */
    public async setDefaultRichMenu(richMenuId: string, ) : Promise<Types.MessageAPIResponseBase> {
        





        const res = this.httpClient.post(
            "/v2/bot/user/all/richmenu/{richMenuId}".replace("{richMenuId}", String(richMenuId)),
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Set webhook endpoint URL
     * @param setWebhookEndpointRequest 
     */
    public async setWebhookEndpoint(setWebhookEndpointRequest: SetWebhookEndpointRequest, ) : Promise<Types.MessageAPIResponseBase> {
        

        const params = setWebhookEndpointRequest;




        const res = this.httpClient.put(
            "/v2/bot/channel/webhook/endpoint",
            params,
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Test webhook endpoint
     * @param testWebhookEndpointRequest 
     */
    public async testWebhookEndpoint(testWebhookEndpointRequest?: TestWebhookEndpointRequest, ) : Promise<TestWebhookEndpointResponse> {
        

        const params = testWebhookEndpointRequest;




        const res = this.httpClient.post<TestWebhookEndpointResponse>(
            "/v2/bot/channel/webhook/test",
            params,
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Unlink rich menu from user
     * @param userId User ID. Found in the &#x60;source&#x60; object of webhook event objects. Do not use the LINE ID used in LINE.
     */
    public async unlinkRichMenuIdFromUser(userId: string, ) : Promise<Types.MessageAPIResponseBase> {
        





        const res = this.httpClient.delete(
            "/v2/bot/user/{userId}/richmenu".replace("{userId}", String(userId)),
            
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Unlink rich menus from multiple users
     * @param richMenuBulkUnlinkRequest 
     */
    public async unlinkRichMenuIdFromUsers(richMenuBulkUnlinkRequest: RichMenuBulkUnlinkRequest, ) : Promise<Types.MessageAPIResponseBase> {
        

        const params = richMenuBulkUnlinkRequest;




        const res = this.httpClient.post(
            "/v2/bot/richmenu/bulk/unlink",
            params,
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Update rich menu alias
     * @param richMenuAliasId The rich menu alias ID you want to update.
     * @param updateRichMenuAliasRequest 
     */
    public async updateRichMenuAlias(richMenuAliasId: string, updateRichMenuAliasRequest: UpdateRichMenuAliasRequest, ) : Promise<Types.MessageAPIResponseBase> {
        

        const params = updateRichMenuAliasRequest;




        const res = this.httpClient.post(
            "/v2/bot/richmenu/alias/{richMenuAliasId}".replace("{richMenuAliasId}", String(richMenuAliasId)),
            params,
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Validate message objects of a broadcast message
     * @param validateMessageRequest 
     */
    public async validateBroadcast(validateMessageRequest: ValidateMessageRequest, ) : Promise<Types.MessageAPIResponseBase> {
        

        const params = validateMessageRequest;




        const res = this.httpClient.post(
            "/v2/bot/message/validate/broadcast",
            params,
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Validate message objects of a multicast message
     * @param validateMessageRequest 
     */
    public async validateMulticast(validateMessageRequest: ValidateMessageRequest, ) : Promise<Types.MessageAPIResponseBase> {
        

        const params = validateMessageRequest;




        const res = this.httpClient.post(
            "/v2/bot/message/validate/multicast",
            params,
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Validate message objects of a narrowcast message
     * @param validateMessageRequest 
     */
    public async validateNarrowcast(validateMessageRequest: ValidateMessageRequest, ) : Promise<Types.MessageAPIResponseBase> {
        

        const params = validateMessageRequest;




        const res = this.httpClient.post(
            "/v2/bot/message/validate/narrowcast",
            params,
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Validate message objects of a push message
     * @param validateMessageRequest 
     */
    public async validatePush(validateMessageRequest: ValidateMessageRequest, ) : Promise<Types.MessageAPIResponseBase> {
        

        const params = validateMessageRequest;




        const res = this.httpClient.post(
            "/v2/bot/message/validate/push",
            params,
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Validate message objects of a reply message
     * @param validateMessageRequest 
     */
    public async validateReply(validateMessageRequest: ValidateMessageRequest, ) : Promise<Types.MessageAPIResponseBase> {
        

        const params = validateMessageRequest;




        const res = this.httpClient.post(
            "/v2/bot/message/validate/reply",
            params,
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Validate a request body of the Replace or unlink the linked rich menus in batches endpoint.
     * @param richMenuBatchRequest 
     */
    public async validateRichMenuBatchRequest(richMenuBatchRequest: RichMenuBatchRequest, ) : Promise<Types.MessageAPIResponseBase> {
        

        const params = richMenuBatchRequest;




        const res = this.httpClient.post(
            "/v2/bot/richmenu/validate/batch",
            params,
            
            
            
        );
        return ensureJSON(res);
    }
    /**
     * Validate rich menu object
     * @param richMenuRequest 
     */
    public async validateRichMenuObject(richMenuRequest: RichMenuRequest, ) : Promise<Types.MessageAPIResponseBase> {
        

        const params = richMenuRequest;




        const res = this.httpClient.post(
            "/v2/bot/richmenu/validate",
            params,
            
            
            
        );
        return ensureJSON(res);
    }
}
